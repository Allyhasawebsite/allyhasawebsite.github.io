const ResumeTab = () => {
  return (
    <div className="font-mono text-sm text-brand-gray flex flex-col gap-3">
      
      {/* Resume PDF */}

      <a href="/images/resume.pdf"
        download="resume"
        className="mt-3 w-full font-mono text-xs text-[#28282B] text-center py-1 outline outline-1 outline-[#28282B] rounded-t-lg transition-colors duration-150"
        onMouseEnter={e => { e.currentTarget.style.background = '#28282B'; e.currentTarget.style.color = '#e0fffe'; }}
        onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = '#28282B'; }}
      >
        [ Download Resume ↓ ]
      </a>

      <img
        src="/images/allyResume2026.jpg"
        alt="Re"
        className="w-full rounded-md object-cover"
      />


    </div>
  );
};

export default ResumeTab;