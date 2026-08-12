function QuickContactButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a href="#contact" className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-glow transition hover:scale-105 md:h-16 md:w-16">
        <span className="sr-only">Quick contact</span>
        ✉
      </a>
    </div>
  );
}

export default QuickContactButton;
