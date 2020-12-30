import { MainLayout } from "../../components/MainLayout";
import loading from "../../images/loading.png";
export function LoadingMainLayout() {
  return (
    <MainLayout>
      <img src={loading} alt="loading" id="loading" />
      loading...
    </MainLayout>
  );
}
