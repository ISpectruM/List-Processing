if (currentCommand === 'end') {
    result.text('Finished');

    executeBtn.off('click',
        execute);
}