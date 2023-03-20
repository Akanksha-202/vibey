import { EventInterface } from '@/lib/types';

import { useSocialIcons } from '@/Icons/Social Icons';

import { FC } from 'react';

interface Props {
  event: EventInterface;
}

const Event: FC<Props> = ({
  event: { description, link, socials, themes, startTime, title },
}) => {
  const socialIcons = useSocialIcons();
  return (
    <div className="card">
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex-1 text-2xl md:text-3xl">{title}</span>
        <span className="flex gap-2">
          {socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">{social.name}</span>
              <span className="block aspect-square w-12 rounded-full border-2 border-primary bg-base-100 p-2 text-primary">
                {socialIcons[social.name]}
              </span>
            </a>
          ))}
        </span>
      </div>
      <span className="mt-2 block text-sm font-medium md:text-lg">
        {description}
      </span>
      <div className="mt-2 flex items-center justify-between">
        <div>
          <div>{new Date(startTime).toUTCString()}</div>
          <span className="font-medium">Theme</span>

          <div className="mt-1 flex flex-wrap gap-2">
            {themes?.map((theme) => (
              <span
                key={theme}
                className="rounded-full border-2 border-base-content px-2 py-1 text-xs uppercase"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          className="rounded-lg bg-base-content px-5 py-3 text-xl font-bold text-base-100"
          rel="noreferrer"
        >
          JOIN
        </a>
      </div>
    </div>
  );
};

export default Event;
