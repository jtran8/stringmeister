import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { id: 1, src: "../../../../assets/img/yonex.png", alt: "Yonex Logo" },
  { id: 2, src: "../../../../assets/img/msv.png", alt: "MSV Logo" },
  { id: 3, src: "../../../../assets/img/luxilon.png", alt: "Luxilon Logo" },
  // Add more logos as needed
];

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Box width="100%" margin="auto">
      <Slider {...settings}>
        {logos.map((logo) => (
          <Box key={logo.id} padding="1rem">
            <Image src={logo.src} alt={logo.alt} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default LogoSlider;
