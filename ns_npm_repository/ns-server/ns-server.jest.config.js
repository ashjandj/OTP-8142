module.exports = {
    roots: ['<rootDir>'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                tsconfig: {
                    experimentalDecorators: true,
                    baseUrl: '.',
                    esModuleInterop: true,
                    composite: true,
                    module: 'amd',
                    target: 'es5',
                    allowJs: true,
                    types: [],
                    lib: ['DOM', 'ES5', 'ES2015']
                },
                isolatedModules: true
            }
        ]
    },
    testMatch: ['**/Commons/ns_npm_repository/ns-server/UnitTests/**/*.[jt]s?(x)'],
    testPathIgnorePatterns: ['/Mocks/'],
    collectCoverage: false,
    coverageDirectory: 'UnitTests/coverage',
    collectCoverageFrom: ['index.js'],
    coveragePathIgnorePatterns: ['/node_modules/', '/UnitTests/'],
    moduleFileExtensions: ['ts', 'tsx', 'jsx', 'js', 'json', 'node', 'd.ts']
};
