import { Container } from "./Container";
import { useLanguage } from "../../lib/LanguageContext";

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <Container>
      <footer className="flex flex-col items-center justify-between gap-2 border-t border-rule py-8 text-center text-[0.78rem] text-mid sm:flex-row sm:text-left">
        <span>© 2026 Ashish Sinha</span>
        <span>{t.footer.tagline}</span>
      </footer>
    </Container>
  );
}
