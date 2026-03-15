export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Praneeth Josyula. Built with Next.js &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
