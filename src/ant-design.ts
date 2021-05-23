import { App } from "vue";
import { Button, Col, Row, message } from "ant-design-vue";

const addAntd = (app: App<Element>): void => {
  app.use(Button);
  app.use(Col);
  app.use(Row);
  app.config.globalProperties.$message = message;
};
export default addAntd;
