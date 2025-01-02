import React from "react";
import BlogCard from "../components/BlogCard";
import { title } from "process";

export default function Mega() {
  const post = [
    {
      id: "1",
      title: " Artificial intelligence is transforming the world",
      description:
        "Artificial intelligence (AI) is a wide-ranging tool that enables people to rethink how we integrate information, analyze data, and use the resulting insights to improve decision making—and already it is transforming every walk of life.  ",
      date: "2024-12-28",
      imageUrl: "../images/blogai.jpeg",
    },

    {
      id: "2",
      title: "179 dead in South Koreas worst plane crash in years",
      description:
        "Two crew members were the only survivors after the plane, which was carrying 181 people, landed on its belly, skidded off a runway and burst into flames, officials said. The aviation disaster is South Korea’s deadliest in more than two decades. ",
      date: "2024-12-28",
      imageUrl: "../images/crash.jpg",
    },
    {
      id: "3",
      title: "Shahid Afridi keeps Afghanistan strong on rain-curtailed day",
      description:
        "Afghanistan 515 for 3 (Rahmat 234, Shahidi 179*, Muzarabani 1-52) trail Zimbabwe 586 by 71 runs ",
      date: "2024-12-28",
      imageUrl: "../images/cricket.jpg",
    },

    {
      id: "4",
      title: " Pakistani rupee is an important currency in central Asia ",
      description:
        " Pakistan's history as a stable and developing economy, along with the country's geopolitical significance",
      date: "2024-12-28",
      imageUrl: "../images//currency.jpg",
    },

    {
      id: "5",
      title:
        "A Review of Major Challenges and the First Comprehensive Universal Health Coverage Initiative",
      description:
        "Each country's healthcare system has a different structure and functioning designed to meet the needs of its people utilizing the available resources. Due to ever-growing population needs and constantly emerging public health problems. ",
      date: "2024-12-28",
      imageUrl: "../images/health.jpg",
    },

    {
      id: "6",
      title: " A view of massive traffic jam on the road ",
      description:
        "Sit-ins and protests by a religious-political party against closure of routes and deadly tension in Parachinar, District Kurram, continues to paralyse various parts of Karachi for the sixth consecutive day on Sunday, with no immediate relief in sight for commuters. ",
      date: "2024-12-28",
      imageUrl: "../images/strike.jpg",
    },

    {
      id: "7",
      title: "Travel with ease and style",
      description:
        "travelling is Choosing an operator that is conservation-minded, with ties to the local community and well-trained guides can add up to the trip of a lifetime and also nurture nature. ",
      date: "2024-12-28",
      imageUrl: "../images/travelling.jpg",
    },

    {
      id: "8",
      title: "Sheheryar Munawar & Maheen Siddiqui tie the Knot",
      description:
        "Their wedding photos and videos quickly went viral, with fans pouring in their congratulations and sharing in their happiness. ",
      date: "2024-12-28",
      imageUrl: "../images/wedding.jpg",
    },

    {
      id: "9",
      title: "How Winter Affects Our Mood and Behavior",
      description:
        " the coldest season of the year, comes between autumn and spring. It is associated with plunging temperatures and icy weather, but its impact and timing change according to location. The farther an area lies from the equator, the colder temperatures it experiences ",
      date: "2024-12-28",
      imageUrl: "../images/winter.jpg",
    },
  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
        Current Issues Updated
      </h1>
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {post.map((post, index) => (
          <div className="fade-in" key={post.id}>
            <div className="blog-card">
              <BlogCard post={post} isDarkBackground />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
