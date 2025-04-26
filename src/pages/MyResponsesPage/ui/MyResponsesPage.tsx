import { MyVacancyResponsesList } from "entities/VacancyResponses";
import { Page } from "shared/ui/Page/Page";
import { Text } from "shared/ui/Text/Text";

const MyResponsesPage = () => {
  return (
    <Page>
        <Text className="mb-4" titleBig="Мои отклики" />
        <MyVacancyResponsesList />
        <div className="bg-red-300 md:bg-green-300 lg:bg-blue-300">
          Адаптивті фон түсі
        </div>
    </Page>
  );
};

export default MyResponsesPage;