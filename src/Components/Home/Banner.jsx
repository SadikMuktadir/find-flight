const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mt-[-64px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/yNnGthc/graddes-pictures-um-ZWh2-VXkeo-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="text-[30px] font-bold">Helping Others</h1>
            <p className="text-[60px] font-bold">
            Live & TravelLive & Travel
            </p>
            <p className="text-[15px] font-semibold">
            Special offers to suit your plan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
