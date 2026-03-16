import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { i18n } = useTranslation();

  return (
    <>
      <div>
        {/* TSC doesn't complain */}
        {i18n.t("message[messageKey1]", {
          variable: "value",
        })}
      </div>

      <div>
        {/* TSC complains due to the whitespaces around the variable name in the message `Message 2 with {{ variable }}` */}
        {i18n.t("message[messageKey2]", {
          variable: "value",
        })}
      </div>
    </>
  );
}

export default App;
