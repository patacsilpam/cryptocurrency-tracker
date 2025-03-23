import { ButtonLink } from "@/components/common/ButtonLink";
export function EmailSubscription() {
  return (
    <>
      <section className="flex flex-col justify-center items-center space-y-5 my-20">
        <div>
          <p className="text-2xl font-bold">Stay Ahead in Cryptocurrency</p>
        </div>
        <div>
          <p className="text-gray-400">
            Sign up now to receive real-time alerts and updates on
            cryptocurrency prices and trends
          </p>
        </div>
        <div>
          <ButtonLink
            link="/learn-more/>"
            className="border  text-center text-sm p-2 px-4 "
          >
            Subscribe
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
