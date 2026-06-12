import { BUSINESS } from "@/lib/business";

// Free Google Maps embed — works without an API key or billing account,
// unlike the Maps JavaScript API.
const Map = () => {
  const { lat, lng } = BUSINESS.location;
  return (
    <iframe
      title={`${BUSINESS.name} location map`}
      src={`https://maps.google.com/maps?q=${lat},${lng}&z=17&output=embed`}
      className="h-full w-full border-0"
      style={{ minHeight: "400px" }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default Map;
