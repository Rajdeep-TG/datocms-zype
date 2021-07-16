import Alert from '../components/alert'
import Footer from '../components/footer'

export default function Layout({ preview, children }) {
  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/highlight.min.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/github-dark.min.css" />
      <script>
        hljs.highlightAll()
      </script>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
