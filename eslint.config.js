export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'lastest',
            sourceType: 'module'
        }, 
        rules: {
            semi: ['error', 'always'],
            quotes: ['error', 'single']
        }
    }
];