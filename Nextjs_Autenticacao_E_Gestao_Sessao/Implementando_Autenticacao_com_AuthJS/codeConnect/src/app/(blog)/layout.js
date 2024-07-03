import { Aside } from "@/components/Aside";
import { SearchForm } from "@/components/SearchForm";

export default function BlogLayout({ children }) {
  return (
    <div className="app-container">
      <div>
        <Aside />
      </div>
      <div className="main-content">
        <SearchForm />
        {children}
      </div>
    </div>
  );
}
