import { Link } from "react-router-dom";
import AWS from "../assets/downloads/AWS.pdf";
import awsPng from "../assets/images/aws.png";
import img2048Jpg from "../assets/images/2048.jpg";
import darkPng from "../assets/images/dark.png";
import tictactoePng from "../assets/images/tictactoe.png";
import brandsLinkedinSvg from "../assets/images/brands/linkedin.svg";
import brandsGithubSvg from "../assets/images/brands/github.svg";
import brandsGravatarSvg from "../assets/images/brands/gravatar.svg";
import brandsGSuiteSvg from "../assets/images/brands/gmail.svg";

import { useTranslation } from "react-i18next";

function Left() {
  const { t } = useTranslation();
  const GAME = "https://sarthakworks.github.io/2048/";
  const EXTENSION =
    "https://chrome.google.com/webstore/detail/dark-mode-kali/chbdmdapmeflnkgibpgbdcblndooljff?hl=en-GB";
  const ANDROID =
    "https://play.google.com/store/apps/details?id=com.sarthakworks.zerokati";
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">{t("social_contacts")}</h5>
          {/* LinkedIn */}
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src={brandsLinkedinSvg}
                    className="avatar-sm rounded object-fit"
                    alt="linkedin"
                  />
                </div>
                <div className="col ps-0">
                  <a
                    href="https://www.linkedin.com/in/sarthakworks/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted fw-bold"
                  >
                    {t("linkedin")}
                  </a>
                  <p className="mb-0">{t("profile")}</p>
                </div>
                <div className="col-auto">
                  <a
                    href="https://www.linkedin.com/in/sarthakworks/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="uil uil-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* GitHub */}
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src={brandsGithubSvg}
                    className="avatar-sm rounded object-fit"
                    alt="github"
                  />
                </div>
                <div className="col ps-0">
                  <a
                    href="https://github.com/sarthakworks"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted fw-bold"
                  >
                    {t("github")}
                  </a>
                  <p className="mb-0">{t("repositories")}</p>
                </div>
                <div className="col-auto">
                  <a
                    href="https://github.com/sarthakworks"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="uil uil-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Mail */}
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src={brandsGSuiteSvg}
                    className="avatar-sm rounded object-fit"
                    alt="mail"
                  />
                </div>
                <div className="col ps-0">
                  <a
                    href="mailto:sarthak.workplace@gmail.com"
                    className="text-muted fw-bold"
                  >
                    {t("mail")}
                  </a>
                  <p className="mb-0">{t("contact")}</p>
                </div>
                <div className="col-auto">
                  <a
                    href="mailto:sarthak.workplace@gmail.com"
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="uil uil-envelope-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Gravatar */}
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src={brandsGravatarSvg}
                    className="avatar-sm rounded object-fit"
                    alt="gravatar"
                  />
                </div>
                <div className="col ps-0">
                  <a
                    href="https://gravatar.com/mentalitycrispy17a40cf071"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted fw-bold"
                  >
                    {t("gravatar")}
                  </a>
                  <p className="mb-0">{t("profile")}</p>
                </div>
                <div className="col-auto">
                  <a
                    href="https://gravatar.com/mentalitycrispy17a40cf071"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="uil uil-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">{t("files")}</h5>
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src={awsPng}
                    className="avatar-sm rounded object-fit"
                    alt="file-"
                  />
                </div>
                <div className="col ps-0">
                  <Link
                    to={AWS}
                    target="_blank"
                    download
                    className="text-muted fw-bold"
                  >
                    AWS Certified Developer.pdf
                  </Link>
                  <p className="mb-0">3.25 MB</p>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <Link
                    to={AWS}
                    target="_blank"
                    download
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="dripicons-download" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title mb-3">{t("fun_things")}</h5>
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src={img2048Jpg}
                    className="avatar-sm rounded object-fit"
                    alt="file-"
                  />
                </div>
                <div className="col ps-0">
                  <a
                    href={GAME}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted fw-bold"
                  >
                    {t("game_2048")}
                  </a>
                  <p className="mb-0">2.3 MB</p>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <a
                    href={GAME}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="uil uil-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src={darkPng}
                    className="avatar-sm rounded object-fit"
                    alt="file-"
                  />
                </div>
                <div className="col ps-0">
                  <a
                    href={EXTENSION}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted fw-bold"
                  >
                    {t("chrome_extension")}
                  </a>
                  <p className="mb-0">
                    <span className="badge bg-success">
                      5 <i className="mdi mdi-star"></i>
                    </span>
                  </p>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <a
                    href={EXTENSION}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="uil uil-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-1 shadow-none border">
            <div className="p-2">
              <div className="row align-items-center">
                <div className="col-auto">
                  <img
                    src={tictactoePng}
                    className="avatar-sm rounded object-fit"
                    alt="file-"
                  />
                </div>
                <div className="col ps-0">
                  <a
                    href={ANDROID}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted fw-bold"
                  >
                    {t("android_game")}
                  </a>
                  <p className="mb-0">
                    <span className="badge bg-success">
                      5 <i className="mdi mdi-star"></i>
                    </span>
                  </p>
                </div>
                <div className="col-auto">
                  {/* Button */}
                  <a
                    href={ANDROID}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-link btn-lg text-muted"
                  >
                    <i className="uil uil-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Left;
