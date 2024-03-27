import { ReactComponent as ArrowDoubleLift } from "../../assets/svg/icons/arrow-double-left.svg";
import { ReactComponent as ArrowDoubleRight } from "../../assets/svg/icons/arrow-double-right.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/icons/arrow-down.svg";
import { ReactComponent as ArrowLeft } from "../../assets/svg/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/icons/arrow-right.svg";
import { ReactComponent as ArrowUp } from "../../assets/svg/icons/arrow-up.svg";
import { ReactComponent as Close } from "../../assets/svg/icons/close.svg";
import { ReactComponent as Edit } from "../../assets/svg/icons/edit.svg";
import { ReactComponent as Facebook } from "../../assets/svg/icons/facebook.svg";
import { ReactComponent as Kakaotalk } from "../../assets/svg/icons/kakaotalk.svg";
import { ReactComponent as Link } from "../../assets/svg/icons/link.svg";
import { ReactComponent as Message } from "../../assets/svg/icons/messages.svg";
import { ReactComponent as More } from "../../assets/svg/icons/more.svg";
import { ReactComponent as Next } from "../../assets/svg/icons/arrow-right2.svg";
import { ReactComponent as Person } from "../../assets/svg/icons/person.svg";
import { ReactComponent as Rejection } from "../../assets/svg/icons/rejection.svg";
import { ReactComponent as ThumbsDown } from "../../assets/svg/icons/thumbs-down.svg";
import { ReactComponent as ThumbsUp } from "../../assets/svg/icons/thumbs-up.svg";

const iconComponents = {
  Next,
  ArrowDoubleLift,
  ArrowDoubleRight,
  ArrowDown,
  ArrowUp,
  ArrowLeft,
  ArrowRight,
  Close,
  Edit,
  Facebook,
  Kakaotalk,
  Link,
  Message,
  More,
  Person,
  Rejection,
  ThumbsDown,
  ThumbsUp,
};

const SVG = Object.fromEntries(
  Object.entries(iconComponents).map(([name, Component]) => [
    name,
    ({ ...rest }) => <Component {...rest} />,
  ])
);

export default SVG;
