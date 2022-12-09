import "./detailServicerPage.css";
import { Link, useParams } from "react-router-dom";

const DetailServicerPage = () => {
  const params = useParams();
  const id = parseInt(params.id);

  return (
    <div>
      <h1>Detail Page</h1>
    </div>
  );
};

export { DetailServicerPage };
