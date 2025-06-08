import LeftHero from "@/components/common/left-hero";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const Trials = (props: Props) => {
  return (
    <div>
      <LeftHero
        title="Trials"
        description="Join the World's Greatest Cricket Talent Hunt and showcase your skills on an international stage."
        backgroundType="image"
        backgroundSrc="https://images.unsplash.com/photo-1562077772-3bd90403f7f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNyaWNrZXR8ZW58MHx8MHx8fDA%3D"
        height="small"
        animated={true}
        parallaxEnabled={true}
        parallaxSpeed={0.7}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-black mb-2">
              Trials Registration - Season 1
            </h1>
            <p className="text-black">
              Fulfil your dream of playing with the stars, register for Season 1
              Trials
            </p>
            <Button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded-full transition duration-300">
              REGISTER
            </Button>
          </div>

          <div className="prose max-w-none">
            <p>
              Any amateur cricketer who wants to take part in the RunBhumi has
              to register for trials and then take part in the three-phase
              selection process in order to play in the tournament.
            </p>

            <p className="font-medium mt-4">
              RunBhumi will be charging a one-time trial registration fee from
              all amateur cricketers, which is as follows:
            </p>

            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>
                Batter: <strong>₹1,500 + GST</strong>
              </li>
              <li>
                Bowler: <strong>₹1,500 + GST</strong>
              </li>
              <li>
                Wicket-keeper Batter: <strong>₹1,500 + GST</strong>
              </li>
              <li>
                Allrounder: <strong>₹1,500 + GST</strong>
              </li>
            </ul>

            <p className="mt-4">
              RunBhumi will not be charging any further fee from an amateur
              cricketer apart from the registration fee before the trials. After
              the registration is complete, an amateur cricketer will be
              required to go through RunBhumi's selection process.
            </p>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-black border-l-4 border-orange-500 pl-3">
                PHASE 1 - TRIALS
              </h2>
              <p className="mt-2">
                Amateur cricketers can register through trials on the RunBhumi
                website by paying a one-time registration fee
                <br />
                Trial Registration Fee: Batter - <strong>₹1,500 + GST</strong>,
                Bowler - ₹1,500 + GST, Wicketkeeper-Batter -{" "}
                <strong>₹1,500 + GST</strong>, Allrounder -{" "}
                <strong>₹1,500 + GST</strong>
                <br />
                All registered amateur cricketers will be invited to take part
                in a trial venue according to their chosen zone and they will be
                tested on their primary skill (batting or bowling) along with
                basic fitness drills.
                <br />
                Amateur Cricketers will be given a chance to showcase their
                skills under the supervision of qualified & professional
                coaches.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-black border-l-4 border-orange-500 pl-3">
                PHASE 2 - SELECTION CAMPS
              </h2>
              <p className="mt-2">
                All players who are shortlisted through the process of trials
                will be invited to attend Selection Camp at an allocated venue
                <br />
                The selection camp is designed to further test the talent and
                ability of the players. It will also be a good learning
                experience for the players through interaction with our highly
                qualified coaches and selectors.
                <br />
                During the Selection Camps, players will be tested for match
                conditions, advanced skill-based drills and fitness.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-black border-l-4 border-orange-500 pl-3">
                PHASE 3 - SUPER CAMP
              </h2>
              <p className="mt-2">
                Players selected through the Selection Camp will be invited to
                attend a two-day Super Camp for the final round of screening at
                a designated location.
                <br />
                During the Super Camp, amateur players will take part in matches
                under the supervision of coaches and will be watched by the
                RunBhumi's Technical Cricket Committee.
                <br />
                The players will be distributed among the teams through a draft
                or an auction process at a base price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trials;
