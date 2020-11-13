const mix = require('laravel-mix')
const fs = require('fs')
const assert = require('assert')
const path = require('path');
const resolveConfig = require('tailwindcss/resolveConfig')

class TailwindExtract {
    /**
     * Registers the plugin.
     *
     * @param {*} src
     * @param {string} outputPath
     */
    register(src = 'tailwind.config.js', outputPath = 'tailwind.json') {
        let tailwindConfigPath = path.resolve(src);
        this.outputPath = outputPath;

        assert(
            fs.existsSync(tailwindConfigPath),
            'Could not resolve Tailwind CSS config.'
        );

        let config = require(tailwindConfigPath)
        return this.json = resolveConfig(config).theme
    }

    /**
     * Boot
     */
    boot() {
        fs.writeFileSync(
            path.resolve(this.outputPath),
            JSON.stringify(this.json)
        );
    }
}

mix.extend('tailwindExtract', new TailwindExtract())
