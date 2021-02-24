class Config {
  constructor() {}

  getThemeMode() {
    const themeModes = {
      light: {
        name: 'Light',
        icon: 'light-mode',
      },
      dark: {
        name: 'Dark',
        icon: 'dark-mode',
      },
      auto: {
        name: 'Auto',
        icon: 'auto-mode',
        lightHour: '7',
        darkHour: '18',
      },
    }

    return themeModes
  }

  getQuickSearchData() {
    const quickSearchData = {
      'r/': {
        urlPrefix: 'https://reddit.com/r/',
      },
      'w/': {
        urlPrefix: 'https://wikipedia.org/wiki/',
      },
      'u/': {
        urlPrefix: 'https://unsplash.com/s/photos/',
      },
      'a/': {
        urlPrefix: 'https://amazon.in/s?k=',
      },
      'y/': {
        urlPrefix: 'https://youtube.com/results?search_query=',
      },
      'g/': {
        urlPrefix: 'https://github.com/search?q=',
      },
    }

    return quickSearchData
  }

  getSearchEngines() {
    const searchEngines = {
      startpage: {
        name: 'Startpage',
        prefix: 'https://www.startpage.com/do/dsearch?query=',
        icon: 'startpage',
      },
      qwant: {
        name: 'Qwant',
        prefix: 'https://www.qwant.com/?q=',
        icon: 'qwant',
      },
      ecosia: {
        name: 'Ecosia',
        prefix: 'https://www.ecosia.org/search?q=',
        icon: 'ecosia',
      },
      duckduckgo: {
        name: 'Duckduckgo',
        prefix: 'https://duckduckgo.com/?q=',
        icon: 'duckduckgo',
      },
      google: {
        name: 'Google',
        prefix: 'https://www.google.com/search?q=',
        icon: 'google',
      },
    }

    return searchEngines
  }

  getWebSites() {
    // Web menu
    // A list of websites that will be generated and put on the web menu
    const webSites = [
      {
        site: 'Reddit',
        icon: 'reddit',
        url: 'https://reddit.com/',
        category: 'social',
      },
      {
        site: 'Github',
        icon: 'github',
        url: 'https://github.com/',
        category: 'development',
      },
      {
        site: 'Youtube',
        icon: 'youtube',
        url: 'https://youtube.com/',
        category: 'media',
      },
      {
        site: 'Twitter',
        icon: 'twitter',
        url: 'https://twitter.com/',
        category: 'social',
      },
      {
        site: 'Email',
        icon: 'mail',
        url: 'https://outlook.live.com/',
        category: 'social',
      },
      {
        site: 'Office 365',
        icon: 'office365',
        url: 'https://office.com/',
        category: 'information',
      },
      {
        site: 'Gitlab',
        icon: 'gitlab',
        url: 'https://gitlab.com/',
        category: 'development',
      },
      {
        site: 'Plannig',
        icon: 'innovation',
        url: 'https://app.asana.com/0/home/1182452471393546',
        category: 'design',
      },
      {
        site: 'Todo List',
        icon: 'checklist',
        url: 'https://todoist.com/app/#start',
        category: 'development',
      },
      {
        site: 'Pomodoro',
        icon: 'timer',
        url: 'https://toggl.com/app/timer',
        category: 'development',
      },
      {
        site: 'Discord',
        icon: 'discord',
        url: 'https://discord.com/',
        category: 'social',
      },
      {
        site: 'Repl.it',
        icon: 'jsfiddle',
        url: 'https://repl.it/repls',
        category: 'development',
      },
      {
        site: 'Markdown Cheatsheet',
        icon: 'markdown',
        url: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet/',
        category: 'development',
      },
      {
        site: 'Amazon',
        icon: 'amazon',
        url: 'https://amazon.in/',
        category: 'shop',
      },
      {
        site: 'Amazon S3',
        icon: 'S3',
        url: 'https://s3.console.aws.amazon.com/s3/home?region=ap-south-1',
        category: 'cloud',
      },
      {
        site: 'AWS',
        icon: 'AWS',
        url: 'https://console.aws.amazon.com/',
        category: 'cloud',
      },
      {
        site: 'Microsoft Azure',
        icon: 'Azure',
        url: 'https://portal.azure.com/',
        category: 'cloud',
      },
      {
        site: 'Digital Ocean',
        icon: 'DO_Blue',
        url: 'https://cloud.digitalocean.com/login',
        category: 'cloud',
      },
      {
        site: 'Expense Manager',
        icon: 'accounting',
        url: 'https://hacstac.herokuapp.com/',
        category: 'Savings',
      },
      {
        site: 'University',
        icon: 'university',
        url: 'https://www.btu.ac.in/BTU/',
        category: 'Education',
      },
      {
        site: 'College',
        icon: 'college',
        url: 'http://www.ecb.ac.in/',
        category: 'Education',
      },
      {
        site: 'Medium',
        icon: 'medium',
        url: 'https://medium.com/',
        category: 'Development',
      },
      {
        site: 'Linkedin',
        icon: 'linkedin',
        url: 'https://www.linkedin.com/feed/',
        category: 'Development',
      },
      {
        site: 'Hashnode',
        icon: 'hashnode',
        url: 'https://hashnode.com/',
        category: 'Development',
      },
    ]

    return webSites
  }

  getPanelSites() {
    // Panel
    // A list of websites that will be generated and put on the Panel
    const panelSites = [
      {
        site: 'Reddit',
        icon: 'reddit',
        url: 'https://reddit.com/',
      },
      {
        site: 'Github',
        icon: 'github',
        url: 'https://github.com/',
      },
      {
        site: 'Gmail',
        icon: 'gmail',
        url: 'https://mail.google.com/',
      },
      {
        site: 'Youtube',
        icon: 'youtube',
        url: 'https://youtube.com/',
      },
      {
        site: 'Twitter',
        icon: 'twitter',
        url: 'https://twitter.com/',
      },
      {
        site: 'University',
        icon: 'university',
        url: 'https://www.btu.ac.in/BTU/',
      },
      {
        site: 'College',
        icon: 'college',
        url: 'http://www.ecb.ac.in/',
      },
      {
        site: 'Expense Manager',
        icon: 'accounting',
        url: 'https://hacstac.herokuapp.com/',
      },
      {
        site: 'Amazon S3',
        icon: 'S3',
        url: 'https://s3.console.aws.amazon.com/s3/home?region=ap-south-1',
      },
    ]

    return panelSites
  }
}
