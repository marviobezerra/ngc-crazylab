const fs = require("fs");
const fse = require("fs-extra");
const exec = require("child_process").exec;

const source = [
  {
    name: "FcTrackModule",
    source: "fc-track",
    path: "tracking",
    version: "0.0.3"
  },
  {
    name: "FcVisionModule",
    source: "fc-vision",
    path: "vision-dashboard",
    version: "0.0.2"
  }
];

function writeProxyModules() {
  fs.mkdir("../app/proxy/", { recursive: true }, err => {
    if (err) throw err;
  });

  for (let item of source) {
    let content = 'import { NgModule } from "@angular/core";';
    content += "\nimport { " + item.name + " } from '" + item.source + "';";
    content += "\n";
    content += "\n@NgModule({";
    content += "\n\timports: [" + item.name + "],";
    content += "\n\texports: [" + item.name + "]";
    content += "\n})";
    content +=
      "\nexport class " + item.name.replace("Module", "ProxyModule") + " {}";

    fs.writeFile(
      "../app/proxy/" + item.source + ".proxy.module.ts",
      content,
      err => {
        if (err) {
          return console.log(err);
        }

        console.log("Proxy Modules Created!");
      }
    );
  }
}

function writeAppRoutes() {
  let content = 'import { NgModule } from "@angular/core";';
  content += '\nimport { Routes, RouterModule } from "@angular/router";';
  content += "\n";
  content += "\nconst routes: Routes = [";
  let count = 0;

  for (let item of source) {
    count++;
    content += "\n\t{";
    content += "\n\t\tpath: '" + item.path + "',";
    content +=
      "\n\t\tloadChildren: './proxy/" +
      item.source +
      ".proxy.module#" +
      item.name.replace("Module", "ProxyModule") +
      "'";
    content += "\n\t}";

    if (count < source.length) {
      content += ",";
    }
  }

  content += "\n]";
  content += "\n";
  content += "\n@NgModule({";
  content += "\n\timports: [RouterModule.forRoot(routes)],";
  content += "\n\texports: [RouterModule]";
  content += "\n})";
  content += "\nexport class AppRoutingModule {}";

  fs.writeFile("../app/app-routing.module.ts", content, err => {
    if (err) {
      return console.log(err);
    }

    console.log("App Routing Module Created!");
  });
}

function installPackages() {
  let command = "npm install --save ";

  for (let item of source) {
    command += item.source + "@" + item.version + " ";
  }

  exec(command, (error, stdout, stderr) => {
    if (error !== null) {
      console.log("exec error: " + error);
      return;
    }

    console.log("Packages Installed");
  });
}

function copyAssets() {
  const errors = [];

  for (let item of source) {
    const source = "./node_modules/" + item.source + "/assets";
    const destination = "../assets/";

    console.log(source);

    fse.copy(source, destination, function(err) {
      if (err) {
        errors.push(err);
      }
    });
  }

  if (errors.length > 0) {
    return console.log("Error on copy assets", errors);
  }

  console.log("Copy files done!");
}

//installPackages();
copyAssets();
writeProxyModules();
writeAppRoutes();
