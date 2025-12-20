import { useState } from "react";
import CryptoJS from "crypto-js";
import { useTranslation } from "react-i18next";
import Card from "../../components/shared/Card";

const modes = {
  CBC: CryptoJS.mode.CBC,
  ECB: CryptoJS.mode.ECB,
  CFB: CryptoJS.mode.CFB,
  OFB: CryptoJS.mode.OFB,
  CTR: CryptoJS.mode.CTR,
};

const paddings = {
  PKCS5: CryptoJS.pad.Pkcs7, // PKCS5 is a subset of PKCS7, compatible for AES
  Pkcs7: CryptoJS.pad.Pkcs7,
  Iso97971: CryptoJS.pad.Iso97971,
  AnsiX923: CryptoJS.pad.AnsiX923,
  Iso10126: CryptoJS.pad.Iso10126,
  ZeroPadding: CryptoJS.pad.ZeroPadding,
  NoPadding: CryptoJS.pad.NoPadding,
};

const updateState = (setter, key, value) =>
  setter((prev) => ({ ...prev, [key]: value }));

const CommonOptions = ({ prefix, state, setter }) => {
  const { t } = useTranslation();
  const isECB = state.mode === "ECB";
  const isNoPadding =
    state.padding === "NoPadding" || state.padding === "ZeroPadding";

  return (
    <>
      <div className="mb-3">
        <label htmlFor={`${prefix}-mode`} className="form-label">
          {t("select_cipher_mode")}
        </label>
        <select
          id={`${prefix}-mode`}
          className="form-select"
          value={state.mode}
          onChange={(e) => updateState(setter, "mode", e.target.value)}
        >
          {Object.keys(modes).map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        {isECB && (
          <small className="text-muted d-block mt-1">{t("ecb_warning")}</small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor={`${prefix}-padding`} className="form-label">
          {t("select_padding")}
        </label>
        <select
          id={`${prefix}-padding`}
          className="form-select"
          value={state.padding}
          onChange={(e) => updateState(setter, "padding", e.target.value)}
        >
          {Object.keys(paddings).map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        {isNoPadding && (
          <small className="text-warning d-block mt-1">
            <i className="uil-exclamation-triangle"></i> {t("padding_warning")}
          </small>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor={`${prefix}-iv`} className="form-label">
          {t("enter_iv")}
        </label>
        <input
          type="text"
          className="form-control"
          id={`${prefix}-iv`}
          placeholder={isECB ? t("iv_ecb_placeholder") : t("iv_placeholder")}
          value={state.iv}
          onChange={(e) => updateState(setter, "iv", e.target.value)}
          disabled={isECB}
        />
      </div>
      <div className="mb-3">
        <label htmlFor={`${prefix}-keysize`} className="form-label">
          {t("key_size")}
        </label>
        <select
          id={`${prefix}-keysize`}
          className="form-select"
          value={state.keySize}
          onChange={(e) => updateState(setter, "keySize", e.target.value)}
        >
          {["128", "192", "256"].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <small className="text-muted">{t("key_derivation_note")}</small>
      </div>
      <div className="mb-3">
        <label htmlFor={`${prefix}-secret`} className="form-label">
          {t("enter_secret_key")}
        </label>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            id={`${prefix}-secret`}
            placeholder={t("enter_secret_key")}
            value={state.secret}
            onChange={(e) => updateState(setter, "secret", e.target.value)}
          />
          <span className="input-group-text">{state.secret.length} chars</span>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-2 text-muted small">{t("treat_key_as")}</span>
          <div className="form-check form-check-inline mb-0">
            <input
              className="form-check-input"
              type="radio"
              name={`${prefix}-keyType`}
              id={`${prefix}-keyPass`}
              value="Passphrase"
              checked={state.keyType === "Passphrase"}
              onChange={() => updateState(setter, "keyType", "Passphrase")}
            />
            <label
              className="form-check-label small"
              htmlFor={`${prefix}-keyPass`}
            >
              {t("passphrase")}
            </label>
          </div>
          <div className="form-check form-check-inline mb-0">
            <input
              className="form-check-input"
              type="radio"
              name={`${prefix}-keyType`}
              id={`${prefix}-keyUtf8`}
              value="Utf8"
              checked={state.keyType === "Utf8"}
              onChange={() => updateState(setter, "keyType", "Utf8")}
            />
            <label
              className="form-check-label small"
              htmlFor={`${prefix}-keyUtf8`}
            >
              {t("raw_text")}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const AesTool = () => {
  const { t } = useTranslation();
  const defaultState = {
    text: "",
    mode: "CBC",
    padding: "Pkcs5",
    iv: "",
    keySize: "128",
    secret: "",
    format: "Base64",
    output: "",
    error: "",
    keyType: "Utf8",
  };

  const [encState, setEncState] = useState({ ...defaultState });

  const [decState, setDecState] = useState({
    ...defaultState,
    format: "Utf8",
  });

  const process = (isEncrypt) => {
    const state = isEncrypt ? encState : decState;
    const setter = isEncrypt ? setEncState : setDecState;

    setter((prev) => ({ ...prev, error: "", output: "" }));

    if (!state.text || !state.secret) {
      setter((prev) => ({
        ...prev,
        error: t("error_missing_inputs", {
          inputType: isEncrypt ? t("plain_text_label") : t("enter_cipher_text"),
        }),
      }));
      return;
    }

    try {
      const keyConfig = {
        mode: modes[state.mode],
        padding: paddings[state.padding],
      };
      if (state.iv && state.mode !== "ECB")
        keyConfig.iv = CryptoJS.enc.Utf8.parse(state.iv);

      // Handle Key parsing
      let parsedKey = state.secret;
      if (state.keyType === "Utf8") {
        parsedKey = CryptoJS.enc.Utf8.parse(state.secret);
      }
      // If Passphrase, crypto-js handles it automatically as string

      let result;
      if (isEncrypt) {
        const encrypted = CryptoJS.AES.encrypt(
          state.text,
          parsedKey,
          keyConfig
        );
        result =
          state.format === "Base64"
            ? encrypted.toString()
            : encrypted.ciphertext.toString(CryptoJS.enc.Hex);
      } else {
        const decrypted = CryptoJS.AES.decrypt(
          state.text,
          parsedKey,
          keyConfig
        );
        if (decrypted.sigBytes < 0) throw new Error("Decryption failed");
        result =
          state.format === "Base64"
            ? decrypted.toString(CryptoJS.enc.Base64)
            : decrypted.toString(CryptoJS.enc.Utf8);
      }
      setter((prev) => ({ ...prev, output: result }));
    } catch (err) {
      setter((prev) => ({
        ...prev,
        error: t("error_failed", {
          processType: isEncrypt ? t("encrypt") : t("decrypt"),
        }),
      }));
      console.error(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box">
            <h4 className="page-title">{t("aes_tool_title")}</h4>
          </div>
        </div>

        {/* Encryption Column */}
        <div className="col-lg-6">
          <Card title={t("aes_encryption_card")}>
            <div className="mb-3">
              <label htmlFor="encrypt-input" className="form-label">
                {t("enter_plain_text")}
              </label>
              <textarea
                className="form-control"
                id="encrypt-input"
                rows="4"
                placeholder={t("enter_plain_text_placeholder")}
                value={encState.text}
                onChange={(e) =>
                  updateState(setEncState, "text", e.target.value)
                }
              ></textarea>
            </div>
            <CommonOptions prefix="enc" state={encState} setter={setEncState} />
            <div className="mb-3">
              <span className="form-label d-block mb-1">
                {t("output_format")}
              </span>
              {["Base64", "Hex"].map((fmt) => (
                <div key={fmt} className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="encFormat"
                    id={`enc${fmt}`}
                    value={fmt}
                    checked={encState.format === fmt}
                    onChange={() => updateState(setEncState, "format", fmt)}
                  />
                  <label className="form-check-label" htmlFor={`enc${fmt}`}>
                    {fmt}
                  </label>
                </div>
              ))}
            </div>
            <button
              className="btn  btn-success w-100 fw-bold mb-3"
              onClick={() => process(true)}
            >
              {t("encrypt")}
            </button>
            {encState.error && (
              <div className="text-danger mb-2">{encState.error}</div>
            )}
            <div className="mb-3">
              <label htmlFor="encrypt-output" className="form-label">
                {t("encrypted_output")}
              </label>
              <textarea
                className="form-control bg-light"
                id="encrypt-output"
                rows="4"
                readOnly
                placeholder={t("result_placeholder")}
                value={encState.output}
              ></textarea>
            </div>
          </Card>
        </div>

        {/* Decryption Column */}
        <div className="col-lg-6">
          <Card title={t("aes_decryption_card")}>
            <div className="mb-3">
              <label htmlFor="decrypt-input" className="form-label">
                {t("enter_cipher_text")}
              </label>
              <textarea
                className="form-control"
                id="decrypt-input"
                rows="4"
                placeholder={t("enter_cipher_text_placeholder")}
                value={decState.text}
                onChange={(e) =>
                  updateState(setDecState, "text", e.target.value)
                }
              ></textarea>
            </div>
            <CommonOptions prefix="dec" state={decState} setter={setDecState} />
            <div className="mb-3">
              <span className="form-label d-block mb-1">
                {t("output_format")}
              </span>
              {["Utf8", "Base64"].map((fmt) => (
                <div key={fmt} className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="decFormat"
                    id={`dec${fmt}`}
                    value={fmt}
                    checked={decState.format === fmt}
                    onChange={() => updateState(setDecState, "format", fmt)}
                  />
                  <label className="form-check-label" htmlFor={`dec${fmt}`}>
                    {fmt === "Utf8" ? t("plain_text_label") : fmt}
                  </label>
                </div>
              ))}
            </div>
            <button
              className="btn btn-danger w-100 fw-bold mb-3"
              onClick={() => process(false)}
            >
              {t("decrypt")}
            </button>
            {decState.error && (
              <div className="text-danger mb-2">{decState.error}</div>
            )}
            <div className="mb-3">
              <label htmlFor="decrypt-output" className="form-label">
                {t("decrypted_output")}
              </label>
              <textarea
                className="form-control bg-light"
                id="decrypt-output"
                rows="4"
                readOnly
                placeholder={t("decrypted_result_placeholder")}
                value={decState.output}
              ></textarea>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AesTool;
