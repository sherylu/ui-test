import Image from "next/image";
import people from "../../../assets/img/bg-people.png";

const SubmitBanner = () => {
  return (
    <aside
      className="banner banner-bottom"
      role="doc-tip"
      aria-label="Submit a name"
    >
      {/* <img
    srcSet="assets/img/bg-people.png 750w, assets/img/bg-people.@2x.png 1440w"
    sizes="(min-width: 750px) 1440px, 100vw"
    className="banner__background"
    src="assets/img/bg-people.png"
    alt=""
    role="none"
  /> */}

      <Image
        src={people}
        alt=""
        layout="fill"
        objectFit="cover"
        className="banner__background"
        sizes="(min-width: 750px) 1440px, 100vw"
      />

      <div className="banner__left">
        <h2 className="banner__heading">
          Is there anyone else you would want us to add?
        </h2>
      </div>
      <div className="banner__right">
        <button className="banner__cta">Submit a name</button>
      </div>
    </aside>
  );
};

export default SubmitBanner;