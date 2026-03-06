const DemoTab = () => {
  return (
    <div className="font-mono text-sm text-brand-gray flex flex-col gap-3">
      <video
        controls
        width="100%"
        style={{ borderRadius: "6px" }}
      >
        <source src="/videos/demo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default DemoTab;