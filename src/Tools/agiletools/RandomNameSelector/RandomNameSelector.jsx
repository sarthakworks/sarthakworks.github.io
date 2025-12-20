import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./RandomNameSelector.css";

function RandomNameSelector() {
  const { t } = useTranslation();

  const [inputText, setInputText] = useState(
    () => localStorage.getItem("rns_inputText") || ""
  );
  const [isSetupMode, setIsSetupMode] = useState(() => {
    const saved = localStorage.getItem("rns_isSetupMode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("rns_items")) || []
  );
  const [rotation, setRotation] = useState(
    () => parseFloat(localStorage.getItem("rns_rotation")) || 0
  );
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState(() => {
    const saved = localStorage.getItem("rns_winner");
    return saved !== "null" && saved ? JSON.parse(saved) : null;
  });

  const [disabledItems, setDisabledItems] = useState(
    () => JSON.parse(localStorage.getItem("rns_disabledItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("rns_inputText", inputText);
  }, [inputText]);
  useEffect(() => {
    localStorage.setItem("rns_isSetupMode", JSON.stringify(isSetupMode));
  }, [isSetupMode]);
  useEffect(() => {
    localStorage.setItem("rns_items", JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    localStorage.setItem("rns_rotation", rotation);
  }, [rotation]);
  useEffect(() => {
    localStorage.setItem("rns_disabledItems", JSON.stringify(disabledItems));
  }, [disabledItems]);
  useEffect(() => {
    localStorage.setItem("rns_winner", JSON.stringify(winner));
  }, [winner]);

  const colors = [
    "#727cf5",
    "#0acf97",
    "#fa5c7c",
    "#ffbc00",
    "#39afd1",
    "#ff679b",
    "#6b5eae",
    "#fd7e14",
    "#2c8ef8",
    "#02a8b5",
  ];

  const handleCreateWheel = () => {
    const list = inputText
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    if (list.length < 2) {
      alert(t("enter_min_names"));
      return;
    }

    const newItems = list.map((text, index) => ({
      id: Date.now() + index,
      text,
      color: colors[index % colors.length],
    }));

    setItems(newItems);
    setDisabledItems([]);
    setRotation(0);
    setWinner(null);
    setIsSetupMode(false);
  };

  const spinWheel = () => {
    if (isSpinning || items.length < 2) return;

    setIsSpinning(true);
    setWinner(null);

    const winnerIndex = Math.floor(Math.random() * items.length);
    const sliceSize = 360 / items.length;

    const sliceCenter = winnerIndex * sliceSize + sliceSize / 2;

    let targetBase = 270 - sliceCenter;
    const currentRot = rotation;

    const minSpin = 1800;

    const currentMod = currentRot % 360;
    let diff = targetBase - currentMod;

    while (diff < 0) diff += 360;

    const newRotation = currentRot + minSpin + diff;

    setRotation(newRotation);

    setTimeout(() => {
      setWinner(items[winnerIndex]);
      setIsSpinning(false);
    }, 4050);
  };

  const handleDisableWinner = () => {
    if (!winner) return;

    setDisabledItems([...disabledItems, winner]);

    const newItems = items.filter((i) => i.id !== winner.id);
    setItems(newItems);
    setWinner(null);
  };

  const handleReset = () => {
    setIsSetupMode(true);
    setItems([]);
    setDisabledItems([]);
    setWinner(null);
  };

  const toggleItemStatus = (item, toActive) => {
    if (toActive) {
      // Move from Disabled -> Active
      setDisabledItems(disabledItems.filter((i) => i.id !== item.id));
      setItems([...items, item]);
    } else {
      // Move from Active -> Disabled
      setItems(items.filter((i) => i.id !== item.id));
      setDisabledItems([...disabledItems, item]);
    }
  };

  const getConicGradient = () => {
    if (items.length === 0) return "";

    let gradient = "conic-gradient(";
    const slice = 100 / items.length;

    items.forEach((item, index) => {
      const start = index * slice;
      const end = (index + 1) * slice;
      gradient += `${item.color} ${start}% ${end}%, `;
    });

    return gradient.slice(0, -2) + ")";
  };

  const renderLabels = () => {
    const sliceDeg = 360 / items.length;
    const offset = sliceDeg / 2;

    return items.map((item, index) => {
      const angle = sliceDeg * index + offset;
      return (
        <div
          key={item.id}
          className="segment-label"
          style={{
            transform: `rotate(${angle}deg) translate(60px)`,
          }}
        >
          {item.text.length > 12
            ? item.text.substring(0, 10) + ".."
            : item.text}
        </div>
      );
    });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="page-title">{t("random_name_selector")}</h4>
            <Link
              to="/agile-tools"
              className="btn btn-sm btn-outline-secondary"
            >
              {t("back_to_agile")}
            </Link>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        {isSetupMode ? (
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                <label htmlFor="names-setup" className="form-label">
                  {t("enter_names_label")}
                </label>
                <textarea
                  id="names-setup"
                  className="form-control mb-3"
                  rows="5"
                  placeholder={t("enter_names_placeholder")}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                ></textarea>
                <button
                  className="btn btn-primary w-100"
                  onClick={handleCreateWheel}
                  disabled={!inputText.trim()}
                >
                  {t("create_wheel")}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-7 text-center mb-4">
                <div className="wheel-container mb-4">
                  <div className="wheel-pointer"></div>
                  <div
                    className="wheel"
                    style={{
                      background: getConicGradient(),
                      transform: `rotate(${rotation}deg)`,
                    }}
                  >
                    {renderLabels()}
                  </div>
                </div>

                {winner ? (
                  <div className="mt-4 animate__animated animate__bounceIn">
                    <h5 className="text-muted">{t("winner_title")}</h5>
                    <h2 className="text-primary fw-bold display-4 mb-3">
                      {winner.text}
                    </h2>
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        className="btn btn-warning px-4"
                        onClick={() => {
                          handleDisableWinner();
                          spinWheel();
                        }}
                      >
                        {t("remove_spin_again")}
                      </button>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => {
                          setWinner(null);
                          setIsSpinning(false);
                        }}
                      >
                        {t("keep_spin_again")}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center gap-2">
                    <button
                      className="btn btn-lg btn-success px-5"
                      onClick={spinWheel}
                      disabled={isSpinning || items.length < 2}
                    >
                      {isSpinning ? t("spinning") : t("spin")}
                    </button>

                    <button
                      className="btn btn-outline-danger"
                      onClick={handleReset}
                      disabled={isSpinning}
                    >
                      {t("reset")}
                    </button>
                  </div>
                )}
              </div>

              <div className="col-md-5">
                <div className="card border-0 shadow-sm">
                  <div className="card-header bg-white border-0">
                    <h5 className="mb-0 text-muted">
                      {t("active_names", { count: items.length })}
                    </h5>
                  </div>
                  <div
                    className="card-body p-0"
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                  >
                    <ul className="list-group list-group-flush">
                      {items.map((item) => (
                        <li
                          key={item.id}
                          className="list-group-item d-flex align-items-center justify-content-between"
                        >
                          <div className="d-flex align-items-center">
                            <span
                              className="d-inline-block rounded-circle me-2"
                              style={{
                                width: 12,
                                height: 12,
                                backgroundColor: item.color,
                              }}
                            ></span>
                            {item.text}
                          </div>
                          <button
                            className="btn btn-sm btn-light text-muted"
                            onClick={() => toggleItemStatus(item, false)}
                            title={t("move_to_removed")}
                          >
                            <i className="mdi mdi-arrow-down"></i>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {disabledItems.length > 0 && (
                  <div className="card border-0 shadow-sm mt-3">
                    <div className="card-header bg-white border-0">
                      <h5 className="mb-0 text-muted">
                        {t("selected_removed")}
                      </h5>
                    </div>
                    <div className="card-body p-0">
                      <ul className="list-group list-group-flush">
                        {disabledItems.map((item) => (
                          <li
                            key={item.id}
                            className="list-group-item d-flex align-items-center justify-content-between text-muted"
                          >
                            <span className="text-decoration-line-through">
                              {item.text}
                            </span>
                            <button
                              className="btn btn-sm btn-light text-muted"
                              onClick={() => toggleItemStatus(item, true)}
                              title={t("move_to_active")}
                            >
                              <i className="mdi mdi-arrow-up"></i>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RandomNameSelector;
