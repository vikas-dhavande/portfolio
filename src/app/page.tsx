import Link from "next/link";

export default function Home() {
  return (
    <div className="container u-margin-block-start-50">
      <section className="u-text-center u-flex u-flex-vertical u-gap-16 u-cross-center">
        <h1 className="heading-level-1">Welcome to Your App</h1>
        <p className="body-text-1" style={{ maxWidth: "600px" }}>
          This is a starter template using <b>Next.js</b> and <b>Appwrite</b>.
          The design system is powered by <b>@appwrite.io/pink</b>.
        </p>

        <div className="u-flex u-gap-16 u-margin-block-start-24">
          <Link href="/signup" className="button is-primary">
            Get Started
          </Link>
          <a href="https://appwrite.io/docs" target="_blank" rel="noreferrer" className="button is-secondary">
            Read Documentation
          </a>
        </div>
      </section>

      <section className="u-margin-block-start-100">
        <div className="card u-padding-32">
          <h2 className="heading-level-3">Appwrite Features</h2>
          <ul className="u-margin-block-start-16 u-flex u-flex-vertical u-gap-8">
            <li className="u-flex u-gap-8 u-cross-center">
              <span className="icon-check-circle u-color-text-success"></span>
              <span>Authentication</span>
            </li>
            <li className="u-flex u-gap-8 u-cross-center">
              <span className="icon-check-circle u-color-text-success"></span>
              <span>Database</span>
            </li>
            <li className="u-flex u-gap-8 u-cross-center">
              <span className="icon-check-circle u-color-text-success"></span>
              <span>Storage</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
