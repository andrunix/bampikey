# bampikey

Copy the BAMPI PassCode to the Windows clipboard.

When you are on call or just debugging, you might need to see the values
returned by MemberService for a given user. In order to call MemberService
through SoapUI or whatever, you need a PassCode. The historical way
to do that is to open a browser, navigate to the "Spring MVC" page,
and copy the BAMPI PassCode.

This command line utility does all that for you. You just run:

```
bampikey.sh
```

from a BASH prompt and it copies the passcode to the Windows
clipboard for you!

BOOM!

## TODO:

- [ ] Make a Windows bampikey.cmd for people who are scared of Bash
