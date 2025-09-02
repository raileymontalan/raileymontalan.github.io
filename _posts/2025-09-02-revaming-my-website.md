---
layout: post
title: Revamping my website... with AI.
date: 2025-09-02
---

I've decided to revamp this website from scratch. A fresh repo using a brand-new framework. It was high time I started using AI to build this blog, as AI has already firmly established its place in my workflow.

Some time last year, my company AI Singapore announced that we would be getting access to [GitHub Copilot](https://github.com/features/copilot). I didn't think much of it at first; I've been comfortable programming by myself for more than a decade already, why would I ever need an assistant to help me code? Boy, was I so wrong.

The first wall to fall was debugging. Of course, my practice was first to try to fix whatever bug I had through sheer willpower. When that failed, I would go to [StackOverflow](https://stackoverflow.com/) (R.I.P.) or the code framework's GitHub page and check if someone has seen the same problem I'm getting. Usually at this point, I would find a solution and make the necessary changes. But there was this one bug that was so elusive, so specific that my search attempts failed to produce a similar sounding error on the forums. Left with no other recourse, I decided to fire up GitHub Copilot for the very first time.

It was wonky at first (I had to enable some settings somewhere), and my first few questions were very tentative. I remember having to copy (and remove sensitive info!) and paste whole sections of code and error messages to the chat interface so that Gemini (AISG's preferred agent) could diagnose and suggest solutions to my issues. (I found out later, you could [add whole files and folders and even terminal windows to the agent's context](https://code.visualstudio.com/docs/copilot/chat/chat-agent-mode).) Unsurprisingly, it was able to fix my code in literal seconds, and I went my merry way. GitHub Copilot saved me a solid 10 minutes of querying and troubleshooting, and I knew at that point I had to make the switch.

The second to fall was with writing boilerplate. No one loves writing this, and yet it is so important with my work with [SEA-HELM](https://leaderboard.sea-lion.ai). I had to do some data manipulations with [Pandas](https://pandas.pydata.org/), and I couldn't be bothered with searching their documentation for the specific commands I needed to filter and aggregate the dataframe. Then I thought, "Copilot could probably do this for me." Lo and behold, it wrote the boilerplate I needed just from a 1-sentence rant I gave it. Now, if I have anything that's "easy" to code, I just ask it to write it for me.

Quickly, I saw I could use GitHub Copilot in almost everything: making my code a bit more efficient here and there, helping me transition from [Conda](https://anaconda.org/anaconda/conda) to [UV](https://docs.astral.sh/uv/) as my Python package manager, and many other instances. Now, I can't imagine coding without it, as [like many others](https://www.theverge.com/decoder-podcast-with-nilay-patel/715267/anysphere-ceo-michael-truell-cursor-ai-automate-programming-interview).

Which brings us to this site revamp. I asked Gemini what [Jekyll](https://jekyllrb.com/) theme would be great for folks in AI like me, and it suggested [al-folio](https://github.com/alshedivat/al-folio). I quickly replicated it and did quick modifications (with GitHub Copilot's help!) to remove a large chunk of features that I didn't need, salvage some parts of my old blog, and change the color theme. I'm quite satisfied with the result :)
