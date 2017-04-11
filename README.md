# utorrent-resume
A tool to generate utorrent's resume file from torrents and files

## Usage
To use this tool, you must have [Node.js](https://nodejs.org/) installed.

1. Clone this repository or download a zip file, then run ```npm install``` 
2. Create a ```config.json``` from ```config.json.sample```.

   Make sure your .torrent files in _torrentDir_ (May **not** be in sub directory), 
   and downloaded data in _dataDir_ (May **be** in sub directory)

   The _blacklist_ can be used to ignore irrelevant files (like your private files). 
   Any file or directory whose name **equal** to any item in the array will be ignored. 
3. Run ```node index```, errors would be reported.
4. The ```resume.dat``` and matched torrents are saved in ```output```. 
   Copy these files to the place they should be.
    
## Disclaimer
This tool is developed presuming the user has enough experience and has not been fully 
tested. It comes with absolutely no warranty and the user is responsible for all the 
possible damage caused by this tool.

## License
This project is published under [GPL-3.0](LICENSE)
