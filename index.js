#!/usr/bin/env node

const colors = require('colors');
const util = require('util');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const readdirAsync = util.promisify(fs.readdir);
const lstatAsync = util.promisify(fs.lstat);
const copyFileAsync = util.promisify(fs.copyFile);
const mkdirAsync = util.promisify(fs.mkdir);

console.log('Creating Papaya.js server..'.green);

exec("npm init -y");
exec("npm install --save papaya.js");
console.log('Installed Papaya.js package.'.yellow);

async function copyTemplateFiles(sourceDir, destinationDir) {
    try {
        const files = await readdirAsync(sourceDir);
        for (const file of files) {
            const sourcePath = path.join(sourceDir, file);
            const destinationPath = path.join(destinationDir, file);

            const stats = await lstatAsync(sourcePath);

            if (stats.isDirectory()) {
                await mkdirAsync(destinationPath);
                await copyTemplateFiles(sourcePath, destinationPath);
            } else {
                await copyFileAsync(sourcePath, destinationPath);
                console.log(`${file} was copied to ${destinationPath}`.blue);
            }
        }
    } catch (err) {
        console.error(err);
    }
}

const templateDir = path.join(__dirname, 'template');
const currentWorkingDir = process.cwd();

copyTemplateFiles(templateDir, currentWorkingDir).then(() => {
    console.log('Papaya.js server created successfully! Run bun index.ts to get started with Papaya.js'.green)
});