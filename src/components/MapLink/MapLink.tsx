import "./MapLink.scss";
import Image from "next/image";
import IMAGE from "../../../public/links";
import Captions from "@/captions/captions";
import Link from "next/link";

const MapLink = () => {
	return (
		<article className="map-link">
			<h2 className="map-link__text1">{Captions.MAP_LINK_TEXT1}</h2>
			<Image
				src={IMAGE.svg.map}
				alt={Captions.MAP_LINK_IMAGE_ALT}
				className="map-link__image"
				height={56}
				width={56}
			/>
			<Link className="map-link__text2" href="/harbours">
				{Captions.MAP_LINK_TEXT2}
			</Link>
		</article>
	);
};

export default MapLink;
