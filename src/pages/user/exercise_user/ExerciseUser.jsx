import React from 'react';

const ExerciseUser = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Your Exercise Plan</h1>
      <div style={styles.exerciseCard}>
        <h2 style={styles.exerciseTitle}>Push-Ups</h2>
        <p style={styles.exerciseDescription}>
          A basic upper body exercise that targets the chest, shoulders, and triceps.
        </p>
        <button style={styles.startButton}>Start</button>
      </div>
      <div style={styles.exerciseCard}>
        <h2 style={styles.exerciseTitle}>Squats</h2>
        <p style={styles.exerciseDescription}>
          An essential lower body exercise that strengthens the legs and glutes.
        </p>
        <button style={styles.startButton}>Start</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    height: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#343a40',
    marginBottom: '30px',
  },
  exerciseCard: {
    width: '300px',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    textAlign: 'center',
  },
  exerciseTitle: {
    fontSize: '1.5rem',
    color: '#007bff',
    marginBottom: '10px',
  },
  exerciseDescription: {
    fontSize: '1rem',
    color: '#6c757d',
    marginBottom: '20px',
  },
  startButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#ffffff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ExerciseUser;
