import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <div>
        {i18n.t("message[messageKey1]", {
          variable: "value",
        })}
      </div>

      <div>
        {i18n.t("message[messageKey2]", {
          variable: "value",
        })}
      </div>
    </>
  );
}

export default App;
