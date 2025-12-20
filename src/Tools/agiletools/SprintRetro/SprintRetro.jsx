import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SprintRetro() {
  const { t } = useTranslation();

  const [startItems, setStartItems] = useState([]);
  const [stopItems, setStopItems] = useState([]);
  const [continueItems, setContinueItems] = useState([]);

  const [inputs, setInputs] = useState({
    start: "",
    stop: "",
    continue: "",
  });

  const handleAddItem = (type) => {
    if (!inputs[type].trim()) return;

    const newItem = {
      id: Date.now(),
      text: inputs[type],
    };

    if (type === "start") setStartItems([...startItems, newItem]);
    else if (type === "stop") setStopItems([...stopItems, newItem]);
    else if (type === "continue") setContinueItems([...continueItems, newItem]);

    setInputs({ ...inputs, [type]: "" });
  };

  const handleDeleteItem = (type, id) => {
    if (type === "start") setStartItems(startItems.filter((i) => i.id !== id));
    else if (type === "stop")
      setStopItems(stopItems.filter((i) => i.id !== id));
    else if (type === "continue")
      setContinueItems(continueItems.filter((i) => i.id !== id));
  };

  const renderColumn = (title, type, items, colorClass, bgClass) => (
    <div className="col-md-4 mb-4">
      <div className={`card h-100 border-0 shadow-sm ${bgClass}`}>
        <div className="card-header border-0 bg-transparent pt-3 pb-2">
          <h4 className={`card-title text-center ${colorClass}`}>{title}</h4>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={t("add_item_placeholder")}
              value={inputs[type]}
              onChange={(e) => setInputs({ ...inputs, [type]: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleAddItem(type)}
            />
            <button
              className={`btn btn-${
                type === "stop"
                  ? "danger"
                  : type === "start"
                  ? "success"
                  : "info"
              }`}
              onClick={() => handleAddItem(type)}
            >
              <i className="mdi mdi-plus"></i>
            </button>
          </div>

          <div className="list-group">
            {items.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center border-0 mb-2 rounded shadow-sm"
              >
                <span>{item.text}</span>
                <button
                  className="btn btn-sm btn-link text-danger p-0 ms-2"
                  onClick={() => handleDeleteItem(type, item.id)}
                >
                  <i className="mdi mdi-delete"></i>
                </button>
              </div>
            ))}
            {items.length === 0 && (
              <div className="text-center text-muted mt-3">
                <small>{t("no_items_yet")}</small>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-flex align-items-center justify-content-between">
            <h4 className="page-title">{t("sprint_retro")}</h4>
            <Link
              to="/agile-tools"
              className="btn btn-sm btn-outline-secondary"
            >
              {t("back_to_agile")}
            </Link>
          </div>
        </div>
      </div>

      <div className="row">
        {renderColumn(
          t("sprint_start"),
          "start",
          startItems,
          "text-success",
          "bg-success-lighten"
        )}
        {renderColumn(
          t("sprint_stop"),
          "stop",
          stopItems,
          "text-danger",
          "bg-danger-lighten"
        )}
        {renderColumn(
          t("sprint_continue"),
          "continue",
          continueItems,
          "text-info",
          "bg-info-lighten"
        )}
      </div>
    </div>
  );
}

export default SprintRetro;
