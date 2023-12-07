import React, { Suspense } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Spotify } from "react-spotify-embed";
import Particles from "../components/particles";
import Loading from "../components/loading";
// const redis = Redis.fromEnv();

export const revalidate = 60;
export default async function ProjectsPage() {
  // const views = (
  //   // await redis.mget<number[]>(
  //   //   ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":")),
  //   // )
  // // ).reduce((acc, v, i) => {
  // //   acc[allProjects[i].slug] = v ?? 0;
  // //   return acc;
  // // }, {} as Record<string, number>);
  // )

  
  return (
    <div className="relative pb-16">
      
      <Navigation />
      
      <div className=" px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0 ">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Audio Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            There isn't one word for it.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <div>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  {/* <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div> */}
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    
                    {/* {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      views[featured.slug] ?? 0,
                    )} */}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className=" mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Digparatsa
                </h2>
                <Particles
                  className="absolute inset-0 -z-10 animate-fade-in"
                  quantity={100}
                />
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">

                  Audio Engineer Extraordinaire

                  Welcome to the sonic universe of Digparatsa, where art meets science in the realm of sound. As a passionate audio engineer based in India, my journey in the world of audio manipulation and creation is marked by a blend of technical expertise and creative flair.
                  <br></br><br></br>
                  Having delved into the depths of sound engineering, I've honed my skills in various aspects of the field, including studio recording, live sound, mixing, mastering, and audio restoration. My passion for excellence is evident in every project I undertake, whether it's crafting the perfect mix for a budding artist or engineering the sound for a large-scale live event.
                  <br></br><br></br>
                  My expertise isn't just confined to the technicalities of audio engineering; it extends to an acute understanding of the emotional impact of sound. I believe that every piece of audio tells a story, and my role is to ensure that this story is told in the most impactful way possible.
                  <br></br><br></br>
                  I am not just an audio engineer; I am a global citizen, fluent in the universal language of sound. My work transcends geographical boundaries, and I am always eager to collaborate with artists and creators from around the world.
                  <br></br><br></br>
                  If you're looking for someone who can bring your audio vision to life with expertise, innovation, and a touch of magic, you're in the right place. Let's create something extraordinary together!

                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  {/* <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p> */}
                </div>
              </article>
            </div>
          </Card>
          
          <div className="w-full lg:w-2/4 mx-auto lg:border-t-0">
          
            <Card key={1}>
              <div className="aspect-w-16 aspect-h-9">
                <Suspense key={1} fallback={<Loading />}>
                <Spotify link="https://open.spotify.com/album/5XzsEw7eRBTfpnSsUtd4eN?si=5RZu52joT2mFQSrFWpMfkA" />
                </Suspense>
              </div>
            </Card>
          
          
        <Particles />
        </div>
        
        

        </div>
      
      </div>
    </div>
  );
}
