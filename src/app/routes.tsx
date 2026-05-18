import { createBrowserRouter } from "react-router";
import S1Upload from "../imports/S1Upload/S1Upload";
import S3Preview from "../imports/S3Preview/S3Preview";
import S6Form from "../imports/S6Form/S6Form";
import S8Confirm from "../imports/S8Confirm/S8Confirm";
import S9Complete from "../imports/S9Complete/S9Complete";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: S1Upload,
  },
  {
    path: "/preview",
    Component: S3Preview,
  },
  {
    path: "/form",
    Component: S6Form,
  },
  {
    path: "/confirm",
    Component: S8Confirm,
  },
  {
    path: "/complete",
    Component: S9Complete,
  },
], {
  basename: import.meta.env.BASE_URL,
});
