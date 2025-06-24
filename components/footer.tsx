export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="text-center">
          <p className="text-muted-foreground font-body">All rights reserved © RMA {currentYear}</p>
        </div>
      </div>
    </footer>
  )
}
