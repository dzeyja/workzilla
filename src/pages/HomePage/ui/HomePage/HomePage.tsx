import { CompletedTasks } from "../CompletedTasks/CompletedTasks";
import { FaqSection } from "../FaqSection/FaqSection";
import { FeedBacks } from "../FeedBacks/FeedBacks";
import { FindCityBanner } from "../FindCityBanner/FindCityBanner";
import { FreelancerBenefits } from "../FreelancerBenefits/FreelancerBenefits";
import { HeroSection } from "../HeroSection/HeroSection";
import { Metrics } from "../Metrics/Metrics";
import { WhyUs } from "../WhyUs/WhyUs";
import { WithdrawMoney } from "../WithdrawMoney/WithdrawMoney";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto">
        <Metrics />
        <FreelancerBenefits />
        <WithdrawMoney />
        <WhyUs />
      </div>
      <CompletedTasks />
      <div className="max-w-7xl mx-auto">
        <FindCityBanner />
      </div>
      <FeedBacks />
      <FaqSection />
    </>
  );
};