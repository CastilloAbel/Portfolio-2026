export default function Container({ children, className = '', id }) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
