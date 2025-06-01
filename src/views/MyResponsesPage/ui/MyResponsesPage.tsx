import { MyVacancyResponsesList } from "entities/VacancyResponses";
import { Page } from "shared/ui/Page/Page";
import { Text } from "shared/ui/Text/Text";

const MyResponsesPage = () => {
    return (
      <Page>
          <Text className="mb-4" titleBig="Мои отклики" />
          <MyVacancyResponsesList />
      </Page>
    );
};

export default MyResponsesPage;