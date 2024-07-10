import styles from "./styles/onBoarding.module.css"
import Link from "next/link";

export default function Onboarding() {

  return (
    <div className={styles.onBoarding}>
      <h1 className={styles.title}>Bienvenido a Publicame!</h1>
      <div >
        <p className={styles.text}>Accede a muchos editores de calidad que podran ayudar a publicar tus paper cientificos</p>
        <Link  href={"/login"}>
            <div className={styles.loginButton}>
                Ingresa
            </div>
        </Link>
      </div>

    </div>
  );
};
