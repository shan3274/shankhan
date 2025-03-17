import Head from "next/head";

const servicesData = {
  "website-development": {
    title: "Website Development",
    description:
      "Custom frontend & backend solutions using React, Next.js, and modern web technologies. I create high-performance, scalable, and SEO-friendly websites.",
  },
  "app-development": {
    title: "App Development",
    description:
      "Building scalable mobile & web apps with modern frameworks like React Native, Flutter, and PWA technologies.",
  },
  "tech-consultation": {
    title: "Tech Consultation",
    description:
      "Expert guidance on software architecture, best practices, and tech stack selection for your business.",
  },
};

export async function getStaticPaths() {
  const paths = Object.keys(servicesData).map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const service = servicesData[params.slug];

  if (!service) {
    return { notFound: true };
  }

  return {
    props: { service },
  };
}

const ServiceDetail = ({ service }) => {
  return (
    <>
      <Head>
        <title>{service.title} | Shan Khan</title>
        <meta name="description" content={service.description} />
        <meta
          name="keywords"
          content={`${service.title}, web development, freelancing`}
        />
        <meta name="author" content="Shan Khan" />
      </Head>

      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900">{service.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{service.description}</p>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
