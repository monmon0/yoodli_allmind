'use client'
import Image from "next/image";
import {useState, useEffect } from 'react'
import { useParams } from 'next/navigation';

interface Story {
  [propName: string]: any;
}

// make html text parser

// make function to convert from unix to actual time

export default function Story() {

    const { id } = useParams()

    const [stories, setStory] = useState<Story>();
    const [comment, setComment] = useState<Story>();

  
  useEffect(() => {
    // example URL /posts/123

    let story;
    console.log(id)
    const fetchStories = async () => {
        const sto = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
        story = await sto.json();
        console.log(story);
        setStory(story);

        let comments = [];

        for (let i = 0; i < 10; i++){
            const cm = await fetch(`https://hacker-news.firebaseio.com/v0/item/${story.kids[i]}.json?print=pretty`);
            const cmd = await cm.json();
            comments.push(cmd);
        }
        console.log(comments);
        setComment(comments);
    }

    fetchStories();


  }, [])

  

  return (
    <div className="items-center min-h-screen  gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  px-32 pb-20">
        <div className="bg-amber-500"> 
          <h1 className="bg-amber-500 text-slate-50 pl-10 font-bold py-4"> HackerNews</h1>
        </div>
        {stories && <div className="flex flex-col">
         <div className="font-bold">{stories.title}</div> 
        <div className="">{stories.score} points by { stories.by} 3 hours ago | {stories.kids.length} comments</div>
        </div>}
        
        {comment && comment.map((cm, index: number) => {
            return (cm && <div className="flex flex-col">
            <div className="" key = {index}>
                {cm.by} commented {cm.time} hrs ago
            </div>
            <div className="">
                {cm.text}
            </div>
            </div>)
        })
        
        }
       
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
