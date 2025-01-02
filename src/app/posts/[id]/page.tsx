"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import { AuthorCard } from "@/components/AuthorCard";
import { title } from "process";
import { useParams } from "next/navigation";

const posts = [
  {
    id: "1",
    title: " Artificial intelligence is transforming the world",
    description:
      "Artificial intelligence (AI) is a wide-ranging tool that enables people to rethink how we integrate information, analyze data, and use the resulting insights to improve decision making—and already it is transforming every walk of life.  ",
    
    image: "../images/blogai.jpeg",
  },

  {
    id: "2",
    title: "179 dead in South Koreas worst plane crash in years",
    description:
      "Two crew members were the only survivors after the plane, which was carrying 181 people, landed on its belly, skidded off a runway and burst into flames, officials said. The aviation disaster is South Korea’s deadliest in more than two decades. ",
   
    image: "../images/crash.jpg",
  },
  {
    id: "3",
    title: "Shahid Afridi keeps Afghanistan strong on rain-curtailed day",
    description:
      "Afghanistan 515 for 3 (Rahmat 234, Shahidi 179*, Muzarabani 1-52) trail Zimbabwe 586 by 71 runs ",
   
    image: "../images/cricket.jpg",
  },

  {
    id: "4",
    title: " Pakistani rupee is an important currency in central Asia ",
    description:
      " Pakistan's history as a stable and developing economy, along with the country's geopolitical significance",
   
    image: "../images//currency.jpg",
  },

  {
    id: "5",
    title:
      "A Review of Major Challenges and the First Comprehensive Universal Health Coverage Initiative",
    description:
      "Each country's healthcare system has a different structure and functioning designed to meet the needs of its people utilizing the available resources. Due to ever-growing population needs and constantly emerging public health problems. ",
  
    image: "../images/health.jpg",
  },

  {
    id: "6",
    title: " A view of massive traffic jam on the road ",
    description:
      "Sit-ins and protests by a religious-political party against closure of routes and deadly tension in Parachinar, District Kurram, continues to paralyse various parts of Karachi for the sixth consecutive day on Sunday, with no immediate relief in sight for commuters. ",
 
    image: "../images/strike.jpg",
  },

  {
    id: "7",
    title: "Travel with ease and style",
    description:
      "travelling is Choosing an operator that is conservation-minded, with ties to the local community and well-trained guides can add up to the trip of a lifetime and also nurture nature. ",
   
    image: "../images/travelling.jpg",
  },

  {
    id: "8",
    title: "Sheheryar Munawar & Maheen Siddiqui tie the Knot",
    description:
      "Their wedding photos and videos quickly went viral, with fans pouring in their congratulations and sharing in their happiness. ",
   
    image: "../images/wedding.jpg",
  },

  {
    id: "9",
    title: "How Winter Affects Our Mood and Behavior",
    description:
      " the coldest season of the year, comes between autumn and spring. It is associated with plunging temperatures and icy weather, but its impact and timing change according to location. The farther an area lies from the equator, the colder temperatures it experiences ",
  
    image: "../images/winter.jpg",
  },
];

export default function Post() {
  const params = useParams();
    const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10"> Post Not Found</h2>
    );
  }
  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className="mt-4 text-justify ">
        {para.trim()}
         </p>
    ));
  };

 return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md-:text-4xl text-3xl font-bold text-red-600 text-center">
        {" "}
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}