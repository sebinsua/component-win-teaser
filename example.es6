import React from 'react';
import WinTeaser from './';

const today = new Date();
export default (
  <div>
    <WinTeaser
      image={{
        src: `http://cdn.static-economist.com/sites/default/files/imagecache/full-width/20151017_BLP560.jpg`,
        title: `Just an image`,
      }}
      type= "hero"
      section="International"
      title="An example of a hero teaser"
      dateTime={today}
      text="THERE are many reasons why sceptics might find fault with the 17
      Sustainable Development Goals, along with 169 associated targets, which
      the leaders of the world..."
      itemType=""
      itemProp=""
      teaserId={""}
    />
    <WinTeaser
      image={{
        src: `http://cdn.static-economist.com/sites/default/files/imagecache/full-width/20151017_BLP560.jpg`,
        title: `Just an image`,
      }}
      type= "default"
      section="International"
      title="An example of a default teaser"
      dateTime={today}
      text="THERE are many reasons why sceptics might find fault with the 17
      Sustainable Development Goals, along with 169 associated targets, which
      the leaders of the world..."
      link={{
        href: `http://www.economist.com/blogs/erasmus/2015/09/un-religion-and-development-0`,
      }}
      itemType=""
      itemProp=""
      teaserId={""}
    />
  </div>
);
