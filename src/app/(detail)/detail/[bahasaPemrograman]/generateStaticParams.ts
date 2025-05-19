export async function generateStaticParams() {
    const languages = ["cpp", "python", "java", "javascript", "php"];
    return languages.map((lang) => ({
      bahasaPemrograman: lang,
    }));
  }