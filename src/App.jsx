import daniel from "./assets/image-daniel.jpg";
import jonathan from "./assets/image-jonathan.jpg";
import jeanette from "./assets/image-jeanette.jpg";
import patrick from "./assets/image-patrick.jpg";
import kira from "./assets/image-kira.jpg";
import quotation from "./assets/bg-pattern-quotation.svg";
function App() {
  return (
    <main className="flex flex-col justify-center  items-center text-[14px] font-barlow bg-[hsl(214_17%_92%)] min-h-screen ">
      <article className="grid items-center justify-center grids-col-1 desk:grid-cols-4 desk:grid-rows-2 max-w-[73rem] gap-7 mx-7 my-20 desk:m-0">
        <div className="flex flex-col gap-3 bg-[hsl(263_55%_52%)] rounded-xl p-8 text-[hsl(214_17%_92%)] desk:col-span-2 desk:order-1  w-full h-full relative shadow-2xl">
          <img
            src={quotation}
            alt="Quotation mark for card"
            className="absolute z-0 hidden size-[7.1rem] -top-[1px] right-16 desk:inline"
          />
          <div className="flex items-center gap-5">
            <img
              src={daniel}
              alt="Daniel Profile"
              className="rounded-full outline-2 outline-[hsl(264_82%_80%)] size-8"
            />
            <div>
              <p className="font-medium">Daniel Clifford</p>
              <p className="text-[hsl(0_0%_81%)]">Verified Graduate</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1.3rem] font-semibold leading-7 z-1">
              "I received a job offer mid-course, and the subjects I learned
              were current, if not more so, in the company I joined. I honestly
              feel I got every penny’s worth."
            </p>
            <p className=" text-[hsl(0_0%_81%)]">
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup.”
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-[hsl(217_19%_35%)] rounded-xl  p-8 text-[hsl(214_17%_92%)]  desk:order-2 desk:col-span-1 w-full h-full shadow-2xl ">
          <div className="flex items-center gap-5">
            <img
              src={jonathan}
              alt="Jonathan Profile"
              className="rounded-full outline-2 outline-gray-100 size-8"
            />
            <div>
              <p className="font-medium">Jonathan Walters</p>
              <p className="text-gray-400">Verified Graduate</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1.3rem] font-semibold leading-7">
              The team was very supportive and kept me motivated
            </p>
            <p className=" text-[hsl(0_0%_81%)]">
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 p-8 bg-white rounded-xl  text-[hsl(214_17%_92%)] w-full h-full desk:order-4 desk:col-span-1 shadow-2xl">
          <div className="flex items-center gap-5">
            <img
              src={jeanette}
              alt="Jeanette Profile"
              className="rounded-full outline-2 outline-gray-100 size-8"
            />
            <div>
              <p className="font-medium text-gray-500">Jeanette Harmon</p>
              <p className="text-gray-400">Verified Graduate</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1.4rem] text-gray-500 font-semibold leading-7">
              An overall wonderful and rewarding experience
            </p>
            <p className="text-gray-500">
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-8 bg-[hsl(219_29%_14%)]  rounded-xl w-full h-full text-[hsl(0_0%_81%)] desk:col-span-2 desk:order-5 shadow-2xl">
          <div className="flex items-center gap-5">
            <img
              src={patrick}
              alt="Patrick Profile"
              className="rounded-full outline-2 outline-purple-500 size-8"
            />
            <div>
              <p className="font-medium ">Patrick Abrams</p>
              <p className="text-[0.75rem]">Verified Graduate</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1.3rem]  font-semibold leading-7">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </p>
            <p>
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 bg-white rounded-xl p-8   desk:row-span-2 desk:max-w-[25rem] desk:m-0 desk:order-3 desK:row-span-2 w-full h-full shadow-2xl">
          <div className="flex items-center gap-5">
            <img
              src={kira}
              alt="Kira Profile"
              className="rounded-full outline-2 outline-gray-100 size-8"
            />
            <div>
              <p className="font-medium text-gray-500">Kira Whittle</p>
              <p className="text-gray-400">Verified Graduate</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[1.3rem] text-gray-500 font-semibold leading-7">
              Such a life-changing experience. Highly recommended!
            </p>
            <p className="text-gray-500">
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
