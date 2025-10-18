import Link from "../../ui/Link";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";

const BreadCrumbsFeature = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <nav className="breadcrumbs">
      {breadcrumbs.map((crumb, idx) => (
        <span key={crumb.href}>
          <Link href={crumb.href} className="">
            {crumb.label}
          </Link>
          {idx < breadcrumbs.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
};

export default BreadCrumbsFeature;
