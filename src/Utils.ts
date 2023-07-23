export function measureInteraction() {
    
    const startTimestamp = performance.now();
  
    return {
      end() {
        const endTimestamp = performance.now();
        console.log('The interaction took', endTimestamp - startTimestamp, 'ms');
      },
    };
  }
