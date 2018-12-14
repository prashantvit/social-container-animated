import "./styles.css";
import { openSocial, closeSocial, createSocialElement } from "./social";
const social = createSocialElement();
social.addEventListener("mouseover", () => openSocial(social));
social.addEventListener("mouseout", () => closeSocial(social));
